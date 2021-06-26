var Wonder_Names = ["The Great Wall of China","Chichén Itzá","Petra","Machu Picchu","Christ the Redeemer","Colosseum","Taj Mahal"];
var Wonder_Images = ["https://cdn.britannica.com/s:800x1000/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg","https://cdn.britannica.com/s:800x1000/49/61349-050-9FFBEB28/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg","https://cdn.britannica.com/s:800x1000/25/153525-050-FC43840D/Khaznah-Petra-Jordan.jpg","https://cdn.britannica.com/s:800x1000/30/94530-050-99493FEA/Machu-Picchu.jpg","https://cdn.britannica.com/s:800x1000/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg","https://cdn.britannica.com/s:800x1000/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg","https://cdn.britannica.com/s:800x1000/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg"];
var i = 0;
function update() {
    i++;
    if (i == 7) {
        i=0;
    }
    document.getElementById("Image").src = Wonder_Images[i];
    document.getElementById("Name").innerHTML = Wonder_Names[i];
}