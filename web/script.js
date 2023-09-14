
let html = ` `

fetch("http://localhost:2000/api/publications")
    .then(res => res.json())
    .then(data => {
        data.forEach(publication => {
            html += `
    <div class="w-4/5 h-auto shadow-black shadow-xl grid grid-cols-1 items-center mb-20" data-id="${publication.id}">

        <div class="grid grid-cols-2 mt-10 ml-8">
            <p class=" text-3xl ">${publication.title}</p>

            <div class="flex justify-end mr-8">
                <button id="btnEdit" >
                    <span class="material-symbols-outlined hover:text-blue-400">
                        edit
                    </span>
                </button>
                <button class="delate">
                    <span class="material-symbols-outlined hover:text-red-400">
                        close
                    </span>
                </button>
            </div>

        </div>

        <div class="w-auto h-auto mb-10">
        <p class="break-words text-2xl mt-4 ml-8 mr-8">${publication.description}</p>
        </div>

        <div class="flex justify-center mb-10">
            <img class="w-64 h-64 text-center" src=${publication.urlpicture}
                alt="">
        </div>

    </div>`

            containerPublications.innerHTML = html
        });


    })

const containerPublications = document.getElementById(`containerPublications`)
const btnNew = document.getElementById("btnNew")

$(btnNew).on("click", async () => {

    await Swal.fire({
        title: 'Create Publication',
        html:
            '<label class="grid mb-2 inputTitle">Title<input id="inputTitle" class="border-black border-b-2" type="text"></label>' +
            '<label class="grid mb-2 ">Description<input id="inputDescription" class="border-black border-b-2" type="text"></label>' +
            '<label class="grid mb-2">Url picture<input id="inputUrlpicture" class="border-black border-b-2" type="text"></label>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Create',
        preConfirm: () => {

            const title = $("#inputTitle").val();
            const description = $("#inputDescription").val();
            const urlpicture = $("#inputUrlpicture").val();

            const newPublication = {
                title: title,
                description: description,
                urlpicture: urlpicture
            }

            return fetch("http://localhost:2000/api/publications", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPublication)
            }).then(res => {
                if (res.ok) {
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Publication created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(() => location.reload(), 1800)
                }
            })
        }

    })

})


