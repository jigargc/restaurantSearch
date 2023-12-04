// const getRandomHotel = () => {
//     const max = hotels.length;
//     const array = [];
//     const ele = [];
//     const totalNumbers = Math.ceil(Math.random() * 1000) % max;
//     while (array.length < totalNumbers) {
//         const randomNumber = Math.ceil(Math.random() * 1000) % max;
//         if (!array.includes(randomNumber)) {
//             array.push(randomNumber);
//             ele.push(hotels[randomNumber]);
//         }
//     }
//     return ele;
// }
const getRandomRestaurants = (search) => {
    const ele = []
    restaurantsData.forEach((v, i) => {
        if (v?.name?.toLowerCase().includes(search?.toLowerCase()) || v.menuItemsArray.some(v => v?.name.toLowerCase().includes(search?.toLowerCase()))) {
            return ele.push({...v, id: i});
        }
    })
    ele.forEach(v => {
        const rand = (Math.ceil(Math.random() * 100) % 5) + 1
        v.image = `images/rr${rand}.jpeg`;
    })
    return ele;
}

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    const hotel = $("#inputHotel").val();
    const location = $("#inputLocation").val();
    if (!hotel && !location) {
        alert("Please enter hotel or location");
        return;
    }
    searchRestaurants(hotel);
});

const searchRestaurants = (restaurant) => {
    const hotels = getRandomRestaurants(restaurant, location);
    renderHotels(hotels);
}

setTimeout(() => {
    const hotel = $("#inputHotel").val();
    if (hotel) {
        searchRestaurants(hotel);
    }
}, 1000)


const renderHotels = (hotels) => {
    const html = hotels.map((hotel, i) => {
        return `
        <div class="col-sm-6 col-md-4 mx-auto">
                <div class="box">
                    <div class="img-box">
                        <img src="${hotel.image}" class="box-img" alt="">
                    </div>
                    <div class="detail-box">
                        <h4>
                            ${hotel.name}
                        </h4>
                        <h3>
                            ${hotel.location}
</h3>
                        <a href="/res.html?id=${hotel.id}">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        `
    }).join("");
    if (html.length === 0) {
        $("#restaurantsPlaceHolder").html(`<p>No restaurant found</p>`);
    } else {
        $("#restaurantsPlaceHolder").html(html);
    }
    $("#link").click();
}
