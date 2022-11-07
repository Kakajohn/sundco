import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../metatags.json';

const Metatags = () => {
    /**
     * @returns the metatags of the project.
     * It loads all the info needed from the metatags.json file.
     */
return (
<Helmet>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='theme-color' content='#000000' />
    {/* <meta name='description' content={data.infos.description} /> */}
    <title>{data.infos.title}</title>
</Helmet>
);
};

export default Metatags;