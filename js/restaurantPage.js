const getParams = () => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);

    const searchParams = new URLSearchParams(url.search);

    return searchParams.get('id') || 0;
}
const getMenuItems = (items) => {
    let str = "<ul>"
    items.forEach(v => {
        str += `<li>
        <a style="padding: 10px" href="/menu.html?item=${v.name}">${v.name}</a>
</li>`
    })
    str += "</ul>"
    return str;
};
setTimeout(() => {
    const id = getParams();
    const restaurant = restaurantsData[id];
    const html = `
    <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box">
                    <div class="img-box">
                        <img src="${restaurant.image}" class="box-img" alt="">
                    </div>
                    <div class="detail-box">
                        <h4>
                            ${restaurant.name}
                        </h4>
                        <h3>
                            ${restaurant.location}
</h3>

                        ${getMenuItems(restaurant.menuItemsArray)}
                    </div>
                </div>
            </div>
    `;
    $("#restaurantsPlaceHolder").html(html);
})
