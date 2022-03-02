$.fn.skyCarousel = function(config) {
    function lookForValues(classes, needles) {
        // last entry wins

        const result = {}
        const attributeClasses = []

        for (var i = 0; i < classes.length; i++) {
            const className = classes[i];
            for (var j = 0; j < needles.length; j++) {
                const needle = needles[j];
                if (className.startsWith(needle)) {
                    result[needle] = className.replace(needle, '')
                    attributeClasses.push(className)
                }

            }
        }
        return [result, attributeClasses];
    }

    if (!config.responsive) {
        config.responsive = {}
    }

    $(this).each(function(idx, element) {

        const nItems = $(this).find('.item').length;


        const handlers = {
            'owl-stage-padding-': function(_key, value, config, _element) {
                config.stagePadding = parseInt(value)
            },
            'owl-xs-': function(key, value, config, _element) {
                config.responsive[0] = { items: parseInt(value) }
            },
            'owl-md-': function(key, value, config, _element) {
                config.responsive[576] = { items: parseInt(value) }
            },
            'owl-md-': function(key, value, config, _element) {
                config.responsive[768] = { items: parseInt(value) }
            },
            'owl-lg-': function(key, value, config, _element) {
                config.responsive[992] = { items: parseInt(value) }
            },
            'owl-xl-': function(key, value, config, _element) {
                config.responsive[1200] = { items: parseInt(value) }
            },
            'owl-xxl-': function(key, value, config, _element) {
                config.responsive[1400] = { items: parseInt(value) }
            },
        }

        if (!element) return;
        const [htmlConf, attributeClasses] = lookForValues(element.classList, Object.keys(handlers));

        // First pass: Add all the entries for HTML to config
        for (const [key, value] of Object.entries(htmlConf)) {
            handlers[key](key, value, config, this)
        }

        // Second pass: React on the values 


        // Copy down stage Padding to the entries, where it makes sense
        for (const [_pixelThreshold, responsiveConfig] of Object.entries(config.responsive)) {
            if (nItems > responsiveConfig.items) {
                // horizontal scrolling is required
                responsiveConfig.stagePadding = config.stagePadding
                responsiveConfig.touchDrag = true
                responsiveConfig.mouseDrag = true
            } else {
                // No scrolling functionality is required
                responsiveConfig.touchDrag = false
                responsiveConfig.mouseDrag = false
            }
        }
        delete config.stagePadding;


        // Finally, remove all the info-classes from the element
        for (const className of attributeClasses) {
            $(element).removeClass(className)
        }
        $(element).css('width', '100%');
    })

    return $(this).owlCarousel(config);
}