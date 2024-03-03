/*
 * @Author: guoyaolei
 * @Date: 2024-02-05 19:59:40
 * @LastEditors: Cary
 * @LastEditTime: 2024-02-24 00:01:10
 * @FilePath: /fastapi-naive-web/src/pages/auth/roles/extend.ts
 * @Descripttion:
 */

import { $t } from "@/settings/i18n";
import { FormItemRule, FormRules } from "naive-ui";

//表单验证规则
export const rolesFromRules: FormRules = {
  name: {
    required: true,
    trigger: ["blur", "input"],
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error($t("Form.required"));
      } else if (
        !/^[a-zA-Z]+[a-zA-Z0-9_-]{2,32}$/.test(value) &&
        !/^https?:\/\/.+/.test(value)
      ) {
        return new Error($t("Form.format_error"));
      }
      return true;
    },
  },
  nickname: {
    required: true,
    trigger: ["blur", "input"],
    message: () => $t("Form.required"),
  },
};