(function(){
    $(document).ready(function(){
        var $toc = $('#toc'), $a;
        var $result = $('<div/>');
        var current = 0;
        $(':header', '.box').each(function(){
            var $li = $('<li/>');
            $a = $('<a/>').attr('href', $(this).text()).text($(this).text().substr(1));
            $li.html($a);

            var depth = parseInt(this.tagName.substring(1));

            if(depth > current) { // going down

                $result.append($('<ol/>').append($li));
                $result = $li;

            } else if (depth < current) { // going up
                $result.parents('ol:eq(' +  (depth + current - 2) + ')').append($li);
                $result = $li;

            } else { // just add the dang item

                $result.parent().append($li);
                $result = $li;

            }

            current = depth;

        });

        $result = $result.parents('ol:last');

        $toc.html($result);
        $(':target').css('background-color', '#ff0000');
    });
})();
