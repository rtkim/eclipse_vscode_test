export default class{
	// 페이지 로드 시 무조건 실행 - 생성자
	constructor(){
		this._list = [];
	}

	// 목록 조회
	get list(){
		return this._list;
	}

	// 수정 버튼 클릭 시 해당 인덱스에 해당하는 할 일 내용 조회
	getIndexValue(index){
		return this._list[index];
	}

	// 할 일 추가
	add(value){
		if(!value) return;

		const obj = {
			content:value,
			date:this.formatDate()
		};
		this._list.push(obj);
	}

	// 할 일 수정
	modify({value, index}){
		if(!value) return;

		const obj = {
			content:value,
			date:this.formatDate()
		};
		this._list[index] = obj;
	}

	// 할 일 삭제
	remove(index){
		this._list.splice(index, 1);
	}

	// 시간 포맷 yyyy-mm-dd
	formatDate() {
	    let date = new Date();
	    let month = '' + (date.getMonth() + 1);
	    let day = '' + date.getDate();
	    let year = date.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}
}