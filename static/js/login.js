// Login Form


$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


$(function() {
    var button = $('#click_button');
    var box = $('#clickBox');
    var form = $('#content_area');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#click_button').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


$(function() {
    var button = $('#click_button1');
    var box = $('#clickBox1');
    var form = $('#content_area1');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#click_button1').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});



$(function() {
    var button = $('#search_option');
    var box = $('#search_box');
    var form = $('#search_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#search_option').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


/*==================message===================*/

$(function() {
    var button = $('#message_option');
    var box = $('#message_box');
    var form = $('#message_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_message",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//	box.toggle();
				//button.toggleClass('active');
				$('#message_new_area_scroll').html('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
			},						
		   success: function(data){
				$('#message_new_area_scroll').html(data);	
			//	$("#message_new_area_scroll").niceScroll({enablemousewheel:true}); // First scrollable DIV
	
				jQuery("#popup_notification_tab_li").removeClass('tab-current');
				jQuery("#popup_friend_tab_li").removeClass('tab-current');
				

				jQuery("#section-2").removeClass('content-current');
				jQuery("#section-3").removeClass('content-current');
				
		   }
		});
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#message_option').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
/*==================notification===================*/
$(function() {
    var button = $('#notification_option');
    var box = $('#notification_box');
    var form = $('#notification_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_notification",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//box.toggle();
				//button.toggleClass('active');
				$('#notificatione_new_area_scroll').prepend('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
				
			},						
		   success: function(data){
				$('#notificatione_new_area_scroll').html(data);	
			//	$("#boxscroll_1").niceScroll({enablemousewheel:true}); // First scrollable DIV
		//	$("#notificatione_new_area_scroll").niceScroll({enablemousewheel:true}); 
			
			jQuery("#popup_message_tab_li").removeClass('tab-current');
			jQuery("#popup_friend_tab_li").removeClass('tab-current');
			
			jQuery("#section-1").removeClass('content-current');
			jQuery("#section-3").removeClass('content-current');
				
		   }
		});
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#notification_option').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
/*==================friend===================*/
$(function() {
    var button = $('#friend_option');
    var box = $('#friend_box');
    var form = $('#friend_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_friend_notification",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//box.toggle();
				//button.toggleClass('active');
				$('#friend_new_area_scroll').html('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
			},						
		   success: function(data){
				$('#friend_new_area_scroll').html(data);	
				//$("#boxscroll_4").niceScroll({enablemousewheel:true}); // First scrollable DIV
						jQuery("#popup_message_tab_li").removeClass('tab-current');
					jQuery("#popup_notification_tab_li").removeClass('tab-current');
				
					
					jQuery("#section-1").removeClass('content-current');
					jQuery("#section-2").removeClass('content-current');
					
		   }
		});
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#friend_option').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});




$(function() {
    var button = $('#photo_option');
    var box = $('#photo_box');
    var form = $('#photo_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

var add_class = function(id){	
	if(id == 'popup_message_tab_li'){
		jQuery("#popup_message_tab_li").addClass('tab-current');
		jQuery("#popup_notification_tab_li").removeClass('tab-current');
		jQuery("#popup_friend_tab_li").removeClass('tab-current');
		
		jQuery("#section-1").addClass('content-current');
		jQuery("#section-2").removeClass('content-current');
		jQuery("#section-3").removeClass('content-current');
		
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_message",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//	box.toggle();
				//button.toggleClass('active');
				$('#message_new_area_scroll').html('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
			},						
		   success: function(data){
				$('#message_new_area_scroll').html(data);	
				//$("#message_new_area_scroll").niceScroll({enablemousewheel:true}); // First scrollable DIV
				
		   }
		});
		
	}
	if(id == 'popup_notification_tab_li'){
		jQuery("#popup_message_tab_li").removeClass('tab-current');
		jQuery("#popup_notification_tab_li").addClass('tab-current');
		jQuery("#popup_friend_tab_li").removeClass('tab-current');
		
		jQuery("#section-1").removeClass('content-current');
		jQuery("#section-2").addClass('content-current');
		jQuery("#section-3").removeClass('content-current');
		
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_notification",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//box.toggle();
				//button.toggleClass('active');
				$('#notificatione_new_area_scroll').prepend('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
			},						
		   success: function(data){
				$('#notificatione_new_area_scroll').html(data);	
			//	$("#boxscroll_1").niceScroll({enablemousewheel:true}); // First scrollable DIV	
		   }
		});
		
		
	}
	if(id == 'popup_friend_tab_li'){
		jQuery("#popup_message_tab_li").removeClass('tab-current');
		jQuery("#popup_notification_tab_li").removeClass('tab-current');
		jQuery("#popup_friend_tab_li").addClass('tab-current');
		
		jQuery("#section-1").removeClass('content-current');
		jQuery("#section-2").removeClass('content-current');
		jQuery("#section-3").addClass('content-current');
		dataString = 'get=true';
		$.ajax({
		   type: "POST",
		   url: rootPath()+"user/new_friend_notification",
		   //url: "http://localhost/kreddit/user/post_validation",
		   //data: {to_user_id : to_user,to_user_id : to_user, status : status},
		   data: dataString,
			beforeSend : function (){							
				//box.toggle();
				//button.toggleClass('active');
				$('#friend_new_area_scroll').html('<img src="'+rootPath()+'images/loading.gif" width="20" height="20" alt="Uploading...."/>');
			},						
		   success: function(data){
				$('#friend_new_area_scroll').html(data);	
				//$("#boxscroll_4").niceScroll({enablemousewheel:true}); // First scrollable DIV
		   }
		});
		
		
	}
}

$(function() {
    var button = $('#photo_option1');
    var box = $('#photo_box1');
    var form = $('#photo_content1');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option1').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


$(function() {
    var button = $('#photo_option2');
    var box = $('#photo_box2');
    var form = $('#photo_content2');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option2').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});



$(function() {
    var button = $('#photo_option3');
    var box = $('#photo_box3');
    var form = $('#photo_content3');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option3').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


$(function() {
    var button = $('#photo_option4');
    var box = $('#photo_box4');
    var form = $('#photo_content4');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option4').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});



$(function() {
    var button = $('#photo_option5');
    var box = $('#photo_box5');
    var form = $('#photo_content5');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#photo_option5').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});

$(function() {
    var button = $('#friend_Add');
    var box = $('#friendAdd_box');
    var form = $('#friendAdd_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#friend_Add').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});



$(function() {
    var button = $('#loginmain');
    var box = $('#loginmain_box');
    var form = $('#loginmain_content');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginmain').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


$(function() {
    var button = $('#search_option2');
    var box = $('#search_box2');
    var form = $('#search_content2');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#search_option2').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});


