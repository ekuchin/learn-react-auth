const routeData =[
    {
        id:"vx",
        title:"Входящие документы",
        description:"Эти документы поступают к нам от контрагентов",
        types:[
            {
                id:"vx_letter",
                title:"Письмо",
                description:"Это произвольный входящий документ"
            },
            {
                id:"req",
                title:"Запрос",
                description:"Это запрос, требует ответа"
            },
            {
                id:"pret",
                title:"Претензия",
                description:"Это наезд"
            }
        ]
    },
    {
        id:"isx",
        title:"Исходящие документы",
        description:"Эти документы мы отправляем контрагентам",
        types:[
            {
                id:"isx_letter",
                title:"Письмо",
                description:"Это произвольный исходящий документ"
            },
            {
                id:"kp",
                title:"Коммерческое предложение",
                description:"Это мы отправляем клиентам"
            },
            {
                id:"resp",
                title:"Ответ",
                description:"Это ответ на запрос или претензию"
            }
        ]
    },
    {
        id:"dog",
        title:"Договоры",
        description:"Эти документы определяют нашу хозяйственную деятельность",
        types:[
            {
                id:"trud",
                title:"Трудовой",
                description:"Это договор с сотрудниками"
            },
            {
                id:"podr",
                title:"Подрядный",
                description:"Этот мы заключаем с поставщиками"
            },
            {
                id:"abon",
                title:"Абонентский",
                description:"Этот договор мы заключаем с клиентами"
            }
        ]
},
]
export default routeData;