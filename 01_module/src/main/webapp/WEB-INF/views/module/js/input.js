export default class{
	constructor({save}){
		// value 와 btn 에 id 세팅
		this.$value = $('#value');
		this.$btn = $('#btn');
		this.save = save;

		// 저장버튼 클릭 시 호출
		this.$btn.on('click', ()=>{
			console.log("click!!");
			this.saveList();
		});

		// input 에서 키 다운 시 호출
		this.$value.on('keydown', (key)=>{
			// keydown key가 enter일 경우 실행
			if (key.keyCode == 13) {
				console.log("enter!!");
				this.saveList();
			}
		});
	}

	// 목록 저장 함수
	saveList() {
		// 입력받은 데이터
		let value = this.$value.val();
		console.log(value);
		// input에 입력했던 할 일 초기화
		this.$value.val('');
		// app.js save 함수 호출
		this.save.call(this, value);
	}

	set value(value){
		// 수정 시 기존 값 세팅
		this.$value.val(value);
	}
}