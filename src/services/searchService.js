import httpRequest from '~/utils/httpRequest';

export const search = async (name, type = 'less') => {
    try {
        const res = await httpRequest.get('User/search', {
            params: {
                name,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
