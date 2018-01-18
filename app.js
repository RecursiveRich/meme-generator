$(function() {
		$("form").on("submit", function(e) {
			e.preventDefault();
			var imgUrl = $("input").eq(0).val();
			var topText = $("input").eq(1).val();
			var bottomText = $("input").eq(2).val();
			var props = {
				class: "meme col-md-5",
				style: `background: url(${imgUrl}); background-repeat: no-repeat; background-position: center center; background-size: cover;`
			}
			var $div = $("<div>");
			$div.attr(props);
			var topP = $("<p>");
			var bottomP = $("<p>");
			topP.attr("id", "top")
				.text(topText);
			bottomP.attr("id", "bottom")
					.text(bottomText);
			$div.append(topP)
				.append(bottomP);
			$('.row').prepend($div);
		});

		$("div.row").on("click", "div.meme", function(e) {
			$(this).remove();
		});

		// $("div.row").on("mouseover", "div.meme", function(e) {
		// 	$(this).css("opacity", "0.5")
		// })

		// $("div.row").on("mouseleave", "div.meme", function(e) {
		// 	$(this).css("opacity", "1.0");
		// })

})