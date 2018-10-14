<template>
    <div class="down-member-details-page">
        <nav-bar :list="nav"></nav-bar>
        <br>
        <section class="content-container" style="padding:40px">
            <basic-info :downMember="true"></basic-info>
            <br>
            <hr>
            <br>
            <rule-text :text="constants.MY_DOWN_MEMBER_RULE"></rule-text>
            <br>
            <br>
            <case-area :readOnly="true" v-model="value1"></case-area>
            <br>
            <case-area :readOnly="true" v-model="value1"></case-area>
        </section>
    </div>
</template>
<script>
import {
    MY_DOWN_MEMBER,
    DOWN_MEMBERS_GRADE_LIST,
    MY_DOWN_MEMBER_RULE
} from "@/constants/TEXT";

import { PATH_DOWN_MEMEBER_CULTURE_GRADE, PATH_DOWN_MEMBER_CULTURE_LIST } from "@/constants/URL";

export default {
    data() {
        return {
            value1: "hhaha",
            nav: [
                {
                    label: DOWN_MEMBERS_GRADE_LIST,
                    href: PATH_DOWN_MEMEBER_CULTURE_GRADE
                },
                {
                    label: MY_DOWN_MEMBER,
                    href: PATH_DOWN_MEMBER_CULTURE_LIST(this.$route.params.id)
                },
                {
                    label: "隔级详情",
                    active: true
                }
            ],
            constants: {
                MY_DOWN_MEMBER_RULE
            }
        };
    },
    components: {
        "nav-bar": () => import("@/components/common/Navbar/index.vue"),
        "basic-info": () =>
            import("@/components/modules/myculture/basicinfo/index.vue"),
        "rule-text": () =>
            import("@/components/modules/myculture/ruletext/index.vue"),
        "case-area": () => import("@/components/common/CaseArea/index.vue")
    }
}
</script>
<style lang="scss" scoped>
    .down-member-details-page {
    }
</style>
