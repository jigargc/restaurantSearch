const getParams = () => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);

    const searchParams = new URLSearchParams(url.search);

    return searchParams.get('item');
}
setTimeout(() => {
    const item = getParams();
    const html = `
            <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box">
                    <div class="img-box">
                        <img src="images/r${Math.ceil(Math.random() * 100) % 3}.jpg" class="box-img" alt="">
                    </div>
                    <div class="detail-box">
                        <h4>
                            ${item}
                        </h4>
                        <p>
                       The Azure Coast Seafood Delight is a culinary masterpiece, a harmonious blend of the ocean's bounty and artisanal culinary techniques. At its heart lies a selection of the freshest seafood, including tender scallops, juicy shrimp, and succulent lobster, all sourced from the pristine waters of the Azure Coast.
</p>
                    </div>
                </div>
            </div>
    `
    $("#restaurantsPlaceHolder").html(html);
})
