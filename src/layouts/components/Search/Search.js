import {  faCircleXmark,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import HeadlessTippy from '@tippyjs/react/headless'
import {Wrapper as PopperWrapper} from '../../../components/Popper'
import AccountItem from '../AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useEffect, useState, useRef } from 'react';
import { useDebounce } from '../../../hooks';
import styles from './search.module.scss';
import classNames from 'classnames/bind';

import * as searchService from '../../../Services/searchService'

const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedvalue = useDebounce(searchValue, 500)
    const inputRef = useRef()
    useEffect(() => {
      if(!debouncedvalue.trim())
      {
        setSearchResult([]);
        return;
      }
      const fetchAPI = async () => {
        setLoading(true)
        const result = await searchService.search(debouncedvalue)
        setSearchResult(result)
        setLoading(false)
      }
     
      
      fetchAPI();
      }, [debouncedvalue]);
      //fetchFunction();
    
    const handleClear = ( ) => {
      setSearchValue('');
      setSearchResult([ ])
      inputRef.current.focus();
    }
    const handleHideResult = () => {
      setShowResult(false);
    }
    const handleChange = (a) => {
      const searchValue = a.target.value;
      if (!searchValue.startsWith(' '))
      {
        setSearchValue(searchValue);
      }
    }

   
    return ( 
        <HeadlessTippy
          interactive
          visible={showResult && searchResult.length > 0}

          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                 <h4 className={cx('search-title')}>
                    Account
                 </h4>
                 {searchResult.map((result)=> (
                   <AccountItem key={result.id} data={result}/>
                  ))}                 
                </PopperWrapper>
              </div>
          )}
          onClickOutside={handleHideResult}
          >
          <div className={cx('search')}>
            <input 
            ref={inputRef}
            value={searchValue} 
            placeholder="Search account and video" 
            spellCheck={false} 
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
            />
           {!!searchValue && !loading && (
              <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon = {faCircleXmark}/>
              </button>

           )}
           {loading && <FontAwesomeIcon className={cx('loading')} icon = {faSpinner}/>}
            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon = {faMagnifyingGlass}/>
            </button>
          </div>
      </HeadlessTippy>
     );
}

export default Search;











