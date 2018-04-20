export default {
    company: {
        name: "Khiros",
        email: "atentimento@khiros.com",
        logoImage: "",
        branch: [
            {
                id: 1,
                phone: {
                    tel: "(69) 3212-1231",
                    cel: "(69) 3213-3123"
                },
                address:{
                city: "Porto Velho",
                province: "Rondonia",
                country: "Brasil",
                postalCode: "13250-526",
                street: "Avenida do meio",
                number: 4132
                }
            }
        ],
        about: "This is the text about the company",
        aboutImage: ""
    },

    carousel:[
        {
            id: 1,
            image: "",
            title: "Conheça nosso tratamento de quiropraxia",
            link: {
                label: "",
                url: ""
            },
            isActive: true

        },
        {
            id: 2,
            image: "",
            title: "Conheça nosso tratamento de quiropraxia",
            link: {
                label: "",
                url: ""
            },
            isActive: true
        }
    ],

    post: [
        {
            id: 1,
            image: "",
            title: "My first Post",
            subtitle: "Something that can goes more than just one phrase.",
            category: "Health",
            text: "Loren ipsun :p",
            //Maybe can be add on the fly while rendering the page by the component.
            // socialMedia: {
            //     facebook: "",
            //     twitter: ""
            // },
            status: 'rascunho',
            createdAt: "Today",
            publishedAt: "Receive date when it was published"

        }
    ],

    occupation: [
        {
            id: 1,
            categoryName: "Doctor",
            professionals: [
                {
                    id: 1,
                    name: "Timoteo Shockness",
                    speciality: "Developer",
                    profileImg: "",
                    credentials: "NO TEINS",
                    bio: "Something about me and about my qualities as a professional",
                    isActive: true
                }
            ]
        },

        {
            id: 2,
            categoryName: "Physiotherapist",
            members: [
                {
                    id: 2,
                    name: "Yeeum Lee",
                    speciality: "Scrum Master",
                    profileImg: "",
                    credentials: "CRA 132314",
                    bio: "Loren is not a psun person",
                    isActive: true
                }
            ]
        }
    ],
    media: [
        {
            id: 1,
            title: "My first Video",
            url: "http://somewhere.com.br/nowhere",
            cover: "images/cover.jpg",
            isActive: true
        }
    ],

    treatments: {
        id: 1,
        name: "Physiotherapy",
        description: "Short description",
        image: "images/physio.jpg",
        //I dont know... Maybe treatments should have sub-tretaments Or not
        //So think about that, and how to handle links for the sub-treatments
    }


}

//CONTS for Post Status: Published (Publicado), Draft (Rascunho), Archive (Arquivo), Deactivated (Desativado)