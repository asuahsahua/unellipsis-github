// This kind of causes a flash of unstyled content issue...
var ellipsisRegexp = new RegExp("(\u2026([ \r\n]+)?)+", 'g');

$('.css-truncate').removeClass('css-truncate');
$('.css-truncate-target').removeClass('css-truncate-target');
$('#your_repos #repo_listing .owner').remove();
$('#your_repos #repo_listing a').each(function() {
	$(this).contents().filter(function() {
		return this.nodeType == 3; // Node.TEXT_NODE
	}).remove();
});

var collapseCommitDesc = function() {
		var $this = $(this);
		var text = ($this.find('.commit-title').text() + $this.find('.commit-desc').text())
			.replace(ellipsisRegexp, '')
		console.log(text);
		$this.find('.message').text(text);
		$this.find('.hidden-text-expander').remove();
};

$(".commit-tease").each(collapseCommitDesc);
$(".commit").each(collapseCommitDesc);

$('body').show();
