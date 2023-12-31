/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core";
import * as EzesundayezeApi from "../../..";
export declare namespace Animals {
    interface Options {
        environment: core.Supplier<string>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}
export declare class Animals {
    protected readonly _options: Animals.Options;
    constructor(_options: Animals.Options);
    getanimals(requestOptions?: Animals.RequestOptions): Promise<EzesundayezeApi.Animal[]>;
    postanimals(request: EzesundayezeApi.Animal, requestOptions?: Animals.RequestOptions): Promise<EzesundayezeApi.Animal>;
    /**
     * @throws {@link EzesundayezeApi.NotFoundError}
     */
    getanimalsid(id: number, requestOptions?: Animals.RequestOptions): Promise<EzesundayezeApi.Animal>;
    /**
     * @throws {@link EzesundayezeApi.NotFoundError}
     */
    putanimalsid(id: number, request: EzesundayezeApi.Animal, requestOptions?: Animals.RequestOptions): Promise<EzesundayezeApi.Animal>;
    /**
     * @throws {@link EzesundayezeApi.NotFoundError}
     */
    deleteanimalsid(id: number, requestOptions?: Animals.RequestOptions): Promise<void>;
}
