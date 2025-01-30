import Realm from "realm";
import {ProductSchema} from "@/domain/product";

export const RealmContext = new Realm({ schema: [ProductSchema] });
