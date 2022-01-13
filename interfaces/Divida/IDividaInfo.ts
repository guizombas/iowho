import { IPessoaInfo } from "../Pessoa/IPessoaInfo";
import { ITransacaoInfo } from "../Transacao/ITransacaoInfo";

export interface IDividaInfo{
    valor: number,
    pessoa: IPessoaInfo,
    transacoes: Array<ITransacaoInfo>
}