import List from './js/list.js';
import Data from './js/data.js';
import Input from './js/input.js';

const MODE = {
	WRITE:'write',
	MODIFY:'modify'
};

let currentMode = MODE.WRITE;
let modifyIndex;

const data = new Data();

const list = new List({
	// 리스트 수정 버튼
	modify:function(index){
		// 수정 모드 세팅
		currentMode = MODE.MODIFY;
		// 수정 할 할 일의 인덱스
		modifyIndex = index;
		// data.js getIndexValue 호출 - 수정 버튼 클릭 시 기존 값 인덱스에 따라 할 일 부여
		input.value = data.getIndexValue(index).content;
	},
	// 리스트 삭제 버튼
	del:function(index){
		// data remove 호출 - 저장된 할 일 삭제
		data.remove(index);
		// data render 호출 - 목록에 할 일 삭제
		list.render(data.list);
	}
});

const input = new Input({
	// 할 일 저장버튼 - 수정도 저장을 눌러야 되는거니까 등록과 같은 로직 다만
	save:function(value){
		switch(currentMode){
			case MODE.WRITE:
				// data.js add 호출 - 작성된 할 일 저장
				data.add(value);
				// list.js render 호출 - 추가된 할 일 목록에 반영
				list.render(data.list);
				break;
			case MODE.MODIFY:
				// data.js modify 호출 - 저장 된 값 저장
				data.modify({value:value, index:modifyIndex});
				// data.js list 호출 - 수정된 할 일 목록에 반영
				list.render(data.list);
				// 쓰기 모드로 하여 저장되도록함
				console.log("test");
				// 모드 쓰기 모드로 초기화
				currentMode = MODE.WRITE;
				break;
		}
	}
});