import { IDividaInfo } from "../interfaces/Divida/IDividaInfo";

export const Mock_Dividas: Array<IDividaInfo> = [{
    pessoa: {
        id: 2,
        nome: "Renato Russo"
    },
    valor: 30,
    transacoes: [{
        data: new Date("2021-12-21T12:04"),
        descricao: "Paguei um biscoito pra ele",
        valor: -10,
        id: 3
    },{
        data: new Date("2022-01-05T16:20"),
        descricao: "Comprou o ingresso do jogo pra mim",
        valor: 40,
        id: 2
    }]
},{
    pessoa: {
        id: 4,
        nome: "Karol Conká"
    },
    valor: -120,
    transacoes: [{
        data: new Date("2021-12-25T08:30"),
        descricao: "Presente de natal da sobrinha dela",
        valor: -120,
        id: 1
    }]
},{
    pessoa: {
        id: 1,
        nome: "Mano Brown"
    },
    valor: 75,
    transacoes: [{
        data: new Date("2021-12-28T08:30"),
        descricao: "Uber pra casa do KLJay",
        valor: -15,
        id: 4
    },{
        data: new Date("2022-01-01T13:10"),
        descricao: "After",
        valor: 80,
        id: 6
    }]
},{
    pessoa: {
        id: 10,
        nome: "Henrique Oitavo"
    },
    valor: 100,
    transacoes: [{
        data: new Date("2021-12-29T13:40"),
        descricao: "Outback",
        valor: 100,
        id: 5
    }]
},{
    pessoa: {
        id: 8,
        nome: "Jorge Ben Jor"
    },
    valor: -10,
    transacoes: [{
        data: new Date("2021-12-22T09:42"),
        descricao: "Pastel com cana de açucar",
        valor: -5,
        id: 7
    },{
        data: new Date("2022-01-08T09:53"),
        descricao: "Pastel com cana de açucar",
        valor: -5,
        id: 8
    }]
}]