function initwinkContent() {
    const winkRegisterBlockType = wp.blocks.registerBlockType; //Blocks API
    const winkCreateElement = wp.element.createElement; //React.createElement
    const wink__ = wp.i18n.__; //translation functions
    const winkInspectorControls = wp.editor.InspectorControls; //Block inspector wrapper
    const winkTextControl = wp.components.TextControl; //WordPress form inputs and server-side renderer
    const winkSelectControl = wp.components.SelectControl; //WordPress form inputs and server-side renderer
    const winkServerSideRender = wp.components.ServerSideRender; //WordPress form inputs and server-side renderer
    const blockName = 'winkcontent';
    const iconEl = winkCreateElement('img', { width: 24, src: 'data:image/com/u/98699744?s=200&v=4;base64,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'});
    var layoutData = [{
            layout: 'ADD_ON_CARD', // now you know which “layout” to use for wink-content-loader
            id: '7d9189da-1a17-4632-a882-ac94b85be49d', // the identifier to inject into the web component
            name: 'Add On Cart', // the name you can use to populate the dropdown list
            placeholderImageUrl: winkData.imgURL+'placeholder-bg.png' // an image you can use as background image to fill out the Block similar to an image block  
        },{
            layout: 'PACKAGE_CARD', // now you know which “layout” to use for wink-content-loader
            id: '2b701f2a-cc11-44cd-a4ec-bc2f6e9889bb', // the identifier to inject into the web component
            name: 'Package Card', // the name you can use to populate the dropdown list
            placeholderImageUrl: winkData.imgURL+'placeholder-bg.png' // an image you can use as background image to fill out the Block similar to an image block  
    }];
    if (winkContentData) {
        layoutData = winkContentData;
        loadBlock();
        console.log(layoutData);
        // jQuery.getJSON(winkContentData.endpointURL, function(data) {
        //     // JSON result in `data` variable
        //     if (data) {
        //         layoutData = data;
        //     }
        //     loadBlock();
        // });
    } else {
        loadBlock();
    }

    function loadFormattedLayoutData(layoutData) {
        
        var formattedLayoutData = [{
            'label' : "Choose your travel inventory",
            'value' : ""
        }];
        jQuery.each(layoutData,function(index,value){
            var currentData = {
                'label' : value.name,
                'value' : value.id
            }
            formattedLayoutData.push(currentData);
        });
        return formattedLayoutData;
    }

    function loadBlock() {
        // layoutData.push({
        //     layout: 'RANKED_INVENTORY_GRID', // now you know which “layout” to use for wink-content-loader
        //     id: '0', // the identifier to inject into the web component
        //     name: 'Ranked Inventory Grid', // the name you can use to populate the dropdown list
        //     placeholderImageUrl: '' // an image you can use as background image to fill out the Block similar to an image block
        // });
        var formattedLayoutData = loadFormattedLayoutData(layoutData);
        winkRegisterBlockType( 'wink-blocks/'+blockName, {
            title: wink__( 'WINK Content' ), // Block title.
            category:  winkData.blockCat, //category
            icon: iconEl,
            supports: {
                'multiple' : true
            },
            attributes:  {
                "layout" : {
                    default: '',
                },
                "layoutId" : {
                    default: '',
                },
                "background" : {
                    default: '',
                }
            },
            //display the post title
            edit(props){
                const attributes =  props.attributes;
                const setAttributes =  props.setAttributes;

                //Function to update slug attribute
                function changeLayout(layoutId){
                    setAttributes({layoutId});
                    if (layoutId !== "") {
                        setLayoutData(layoutId);
                    } else {
                        var layout = "";
                        setAttributes({layout});
                        var background = "";
                        if (background) {
                            setAttributes({background});
                            attributes.background = "";
                        }
                    }
                }
                
                function setLayoutData(layoutid) {
                    background = '';
                    setAttributes({background});
                    if (layoutid.type == 'number') {
                        layoutid = layoutid.toString();
                    }
                    console.log(layoutid);
                    console.log(layoutData);
                    jQuery.each(layoutData,function(index,value){
                        if (value.id == layoutid) {
                            var layout = value.layout;
                            setAttributes({layout});
                            background = value.placeholderImageUrl;
                            if (background) {
                                setAttributes({background});
                                
                            }
                        }
                    });
                    
                }

                function changeBackground(background){
                    setAttributes({background});
                }

                if (attributes.layout === "") {
                    attributes.background = "";
                }
                if (winkData.mode == 'staging' || winkData.mode == 'development') {
                    var preview = winkCreateElement( winkServerSideRender, {
                        block: 'wink-blocks/'+blockName,
                        attributes: attributes,
                        key: 'winkPreview_'+blockName
                    } );
                } else {
                    var preview = winkCreateElement(
                        'div',
                            {
                                class: blockName
                            },
                            winkCreateElement(
                                'p',
                                    {
                                        
                                    },
                                    wink__('Ranked Inventory Grid')
                            ),
                            winkCreateElement(
                                'p',
                                    {
                                        class: 'noPreview' 
                                    },
                                    wink__('No Preview Available') 
                            ),
                            winkCreateElement(
                                'img',
                                {
                                    src: winkData.imgURL+'logo.png'
                                }
                            ),
                    );
                    
                    if (attributes.layout === "") {
                        var preview = winkCreateElement(
                            'div',
                                {
                                    class: blockName
                                },
                                winkCreateElement(
                                    'p',
                                        {
                                            
                                        },
                                        wink__('Please select a layout in the block settings.')
                                ),
                                winkCreateElement(
                                    'img',
                                    {
                                        src: winkData.imgURL+'logo.png'
                                    }
                                ),
                        );
                    }
                    else if (attributes.layout !== "RANKED_INVENTORY_GRID") {
                        preview = winkCreateElement(
                        'img',
                            {
                                src: attributes.background,
                                class: 'winkContentImg'
                            },
                        );
                    }
                }

                var backgroundURL = [];
                if(attributes.layout != '') {
                    backgroundURL = winkCreateElement(winkTextControl, {
                        value: attributes.background,
                        label: wink__( 'Background Image URL' ),
                        onChange: changeBackground,
                        type: 'text',
                        key: 'winkBackground'
                    })
                }

                var shortcodeAttributes = "";
                jQuery.each(attributes,function(index,value){
                    shortcodeAttributes += ' '+index+'=""';
                });
                const inspector = winkCreateElement( winkInspectorControls, {
                    key: 'winkInspector_'+blockName 
                },
                    [
                        winkCreateElement(
                            'div',
                            {
                                
                            },
                            wink__('We strongly recommend to use this block only in full-width content areas and not in columns.')
                        ),
                        winkCreateElement(winkSelectControl, {
                            value: attributes.layoutId,
                            label: wink__( 'Layout' ),
                            onChange: changeLayout,
                            type: 'select',
                            options: formattedLayoutData,
                            key: 'winkLayout'
                        }),
                        // backgroundURL,
                        // bgPosition,
                        // customBGPosition,
                        // bgSize,
                        // customBGSize,
                    ],
                    [
                        winkCreateElement(
                            'p',
                            {},
                            wink__('Alternatively to this block, you can also use the following shortcode:')
                        ) 
                    ],
                    [
                        winkCreateElement(
                            'p',
                            {},
                            '['+blockName+shortcodeAttributes+']'
                        ) 
                    ]
                );
                return winkCreateElement(
                    'div',
                    {},
                    // Children of the main div as an array
                    [ preview, inspector ]
                );
            },
            save(){
                return null;//save has to exist. This all we need
            }
        });
    }
}
initwinkContent();
