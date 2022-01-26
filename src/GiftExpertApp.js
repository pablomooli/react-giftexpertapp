    import React, {Fragment, useState} from "react";
    import {AddCategories} from "./components/AddCategories";
    import {GifGrid} from "./components/GifGrid";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    {/*const handledAdd = () => {

        setCategories([...categories, 'HunterXHunter'])
    }*/}

        return (
            <Fragment>
                <h2>GiftExpertApp</h2>
                <AddCategories setCategories={ setCategories }/>
                <hr />

                <ol>
                    {
                        categories.map(category =>
                           <GifGrid
                               key={ category }
                               category={category}/>)
                    }
                </ol>


            </Fragment>
        )
}