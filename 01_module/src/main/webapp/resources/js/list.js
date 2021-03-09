export default class{
	constructor({modify, del}){
		this.modify = modify;
		this.del = del;
		this.$list = $('#list');

		this.render([]);
	}

	// 항목을 추가 하거나 삭제
	render(list){
		this.$list = $('#list').empty();

		if(list.length > 0){
			for(let row of list){
				let self = this;
				let template = `<tr>
									<td><span>${row.content}</span></td>
									<td class="text-center"><span>${row.date}</span></td>
									<td class="text-right">
										<input class="btn btn-default btn-modify" type="button" value="수정" />
										<input class="btn btn-default btn-delete" type="button" value="삭제" />
									</td>
								</tr>`;

				let $template = $(template);
				this.$list.append($template);

				// app.js modify 함수 호출
				$template.find('.btn-modify').on('click', function(){
					console.log($(this).parents('tr').index());
					self.modify.call(this, $(this).parents('tr').index());
				});

				// app.js del 함수 호출
				$template.find('.btn-delete').on('click', function(){
					//self.del.call(this, $(this).parents('tr').index());
					self.del.call(this);
				});
			}
		} else {
			let template = `<tr>
								<td colspan="3" class="no-list"><span>등록된 할 일이 없습니다.</span></td>
							</tr>`;
			let $template = $(template);
			this.$list.append($template);
		}
	}
}