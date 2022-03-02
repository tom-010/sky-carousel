sky-carousel
============

Adds a placholder around own-carousel to make it stop jumping and lets you configure it via HTML-classes (like bootstrap)

```html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="<?= get_template_directory_uri() . '/assets/js/owl.carousel.min.js'; ?>"></script>
<script src="<?= get_template_directory_uri() . '/assets/js/sky-carousel.js'; ?>"></script>

...

<div class="pt-2 pt-sm-5 owl-carousel-wrapper">
        <div class="row owl-carousel agreement-plan-carousel pt-2 pt-sm-5 owl-stage-padding-0 owl-xs-2 owl-lg-3 sc-row">
            <div class="item pb-4 pb-lg-0">
                <div class="start-section-item text-center p-4 background-blue">
                    <div class="start-section-icon">
                        <div class="centered-third max-circled-icon-with">
                            <div class="rectangle">
                                <div class="rectangle-content white-circle">
                                    <svg fill="#2186ab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M48.66 79.13C128.4 100.9 208.2 80.59 288 60.25C375 38.08 462 15.9 549 48.38C565.9 54.69 576 71.62 576 89.66V399.5C576 423.4 550.4 439.2 527.3 432.9C447.6 411.1 367.8 431.4 288 451.7C200.1 473.9 113.1 496.1 26.97 463.6C10.06 457.3 0 440.4 0 422.3V112.5C0 88.59 25.61 72.83 48.66 79.13L48.66 79.13zM287.1 352C332.2 352 368 309 368 255.1C368 202.1 332.2 159.1 287.1 159.1C243.8 159.1 207.1 202.1 207.1 255.1C207.1 309 243.8 352 287.1 352zM63.1 416H127.1C127.1 380.7 99.35 352 63.1 352V416zM63.1 143.1V207.1C99.35 207.1 127.1 179.3 127.1 143.1H63.1zM512 303.1C476.7 303.1 448 332.7 448 368H512V303.1zM448 95.1C448 131.3 476.7 159.1 512 159.1V95.1H448z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="mt-4">Headline</h5>
                    <p class="small-text">Some content</p>
                </div>
            </div>
....
```

