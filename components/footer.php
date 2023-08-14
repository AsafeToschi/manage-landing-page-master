<!-- Footer -->
<footer id="footer">
    <div class="container">
        <div class="four-col-grid">
            <div class="social vertical-space-between row-span-2">
                <div class="logo">
                    <a href="#">
                        <?= get_svg("logo.svg") ?>
                    </a>
                </div>
                <div class="social-media-links">
                    <a href="#"> <?= get_svg("icon-facebook.svg") ?> </a>
                    <a href="#"> <?= get_svg("icon-youtube.svg") ?> </a>
                    <a href="#"> <?= get_svg("icon-twitter.svg") ?> </a>
                    <a href="#"> <?= get_svg("icon-pinterest.svg") ?> </a>
                    <a href="#"> <?= get_svg("icon-instagram.svg") ?> </a>
                </div>
            </div>
            
            <div class="navigation-links col-span-2 row-span-2">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="newsletter flex justify-end">            
                <!-- Newsletter -->
                <form id="newsletter-form">
                    <div class="wrapper">
                        <input type="email" name="email" placeholder="Updates in your inbox…" />
                        <button type="submit">Go</button>
                    </div>
                </form>
            </div>

            <div class="copyright flex justify-end items-end">
                <span>Copyright 2020. All Rights Reserved</span>
            </div>
        </div>
    </div>
</footer>