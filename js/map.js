function initMap() {
    const pos = {lat: 34.824745796263656, lng: 32.392963774131196}

    const opt = {
        center: pos,
        zoom: 18
    }

    let map = new google.maps.Map(document.getElementById("map"), opt)

    const marker = new google.maps.Marker({
        position: pos,
        icon: "img/Marker.svg",
        map: map,
        title: "hello",
    })
}

window.initMap = initMap;
