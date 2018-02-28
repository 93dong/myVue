/*
* mock假数据
* 2018-2-27
* */

import Mock from "mockjs"
import mianNavData from "./mainNav"

Mock.mock("getMianData","get",mianNavData);