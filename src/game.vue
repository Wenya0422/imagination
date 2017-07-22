<template>
	<div>
		<div class="head">
			<h1>word</h1>
			<div class="scores-container">
				<span class="scores">
					<i>
						scores:
                    </i>
                        <strong class="scoresNum" v-model="score">
                            {{score}}
                        </strong>
				</span>
			</div>
		</div>
		  <!-- <form action="./res/api.html" method="get" name="formDeom">    -->
			<div class="wordList">
                <strong class="wordCard">单词卡:</strong> 
                <select class="form-control" 
                    style="width:80%; display: inline-block; margin-left: 10px" 
                    v-model="wordMean" 
                >
                    <template v-for="(x,index) in wordLab">
                        <option :value="x.word" v-text="x.mean" ></option>
                    </template>
</select>

</div>

<p class="wordList" style="padding:0px 0 0 10px; margin:10px 0 0">
    <strong>词库卡：</strong>
    <input type="text" name="newWord" v-model="result" required="required" id="resultNew">
    <!-- <button @click="deleteW">删除</button> -->
    <input type="submit" class="submit" @click="submit" value="确定">
</p>
<!-- </form> -->
<div class="ov">
    <a href="javascript:;" class="tip" @click="tipWord(index)">提示</a>
</div>

<div class="wrapper">
    <div class="box" v-text="x" v-for="(x,index) in dWords" @click="chose(index)"></div>
</div>

</div>
</template>
<script>
    localStorage.setItem('word', 'list')
    export default {
        data() {
            return {
                score: 0,
                writeWord: [],
                index: null,
                result: null,
                wordMean: null,
                index: null,
                word: null,
                wordLab: [],
                arrWord: [],
                wordsList: [{
                        word: 'add',
                        mean: 'v. 补充，把什么加起来'
                    },

                    {
                        word: 'belief',
                        mean: 'n. 相信，信念，信仰'
                    },

                    {
                        word: 'campaign',
                        mean: 'n. 战役，运动，活动；vt.参加竞赛;vt.(从事，组织)活动'
                    },

                    {
                        word: 'contribute',
                        mean: 'vt. 捐助，投稿；vi.投稿，贡献，是原因之一'
                    },

                    {
                        word: 'favourable',
                        mean: 'n. 有用的，良好的，赞成的'
                    },

                ],
                dWords: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "W"]

            }
        },

        methods: {
            charater() { //将字母随机排序
                this.dWords.sort(() => Math.random() - 0.5);
            },

            chose(i) {
                this.index = i
                this.writeWord.push(this.dWords[this.index].toLowerCase())
                this.result = this.writeWord.join("")
            },

            submit() {
                if (this.wordMean == null) {
                    alert('主人，您还没选择要挑战的单词噢')
                } else if (this.result == null) {
                    alert('主人，记得从下面的字母表中选择正确的单词哦')
                } else {
                    if (this.result != this.wordMean) {
                        alert('主人,您记错了哦.')
                        if (this.score == 0) {
                            this.score = 0
                        } else {
                            this.score -= 10
                        }
                    } else {
                        alert('主人，您答对了,好棒哦!^_−☆')
                        this.score += 10
                        localStorage.lis = '0'
                        localStorage.word = this.result
                        localStorage.list = this.score + 10

                        this.score = parseInt(localStorage.list)


                    }
                }
                this.result = ''
                this.writeWord = []
            },

            tipWord(i) {
                this.result = this.wordMean
            },



        },

        mounted() {
            this.charater()
            this.wordLab = this.wordsList

        },
    }
</script>