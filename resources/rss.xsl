<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:GetJealous="http://www.GetJealous.com">
  <xsl:output method="html"></xsl:output>
  <xsl:template match="/">
    <html>
      <head><title>RSS format news</title></head>
      <style type="text/css">
*
{
  font-family: Arial, Verdana, Helvetica;
}

p
{
  font-size: 12pt;
}

span.storytime
{
  float: right;
  font-style: italic;
}

div.story
{
  border: 1px solid rgb(40%,40%,40%);
  margin-left: 2em;
  padding: 0.5em;
  background: beige;
}

h1
{
  font-size: 24pt;
}

h2
{
  font-size: 16pt;
}

acronym
{
  cursor: help;
  font-weight: bold;
  border-bottom: 1px dotted green;
}

a
{
  color: rgb(40%,40%,40%);
}

a:hover
{
  background-color: rgb(90%,90%,90%);
}

div.bottom
{
  margin-top: 2em;
  border-top: 1px solid rgb(10%,10%,10%);
}

span.left
{
  float: left;
}

span.right
{
  float: right;
}
      </style>
      <body>
        <h1><xsl:value-of select="//rss/channel/title" /></h1>
        <p>You have selected the raw data feed for the GetJealous.com site you were viewing,
          <a><xsl:attribute name="href"><xsl:value-of select="//rss/channel/link" /></xsl:attribute><xsl:value-of select="//rss/channel/title" /></a>.
          This data is suitable for aggregation by an automated, 
          RSS-capable newsreader.  
          Your browser does not currently support display of RSS content.
                </p>
        <p>Using an automated RSS aggregator will allow you to read this and              other RSS-enabled-sites by polling and downloading the content and viewing it
        in the application.  This will save you significant time normally spent visiting
        and reading each site in turn.</p>
        
        <p>Some suggestions for an automated newsreader are:</p>


        <h2>Web</h2>        
        <ul>
          <li><a href="http://add.my.yahoo.com/rss?url={//rss/channel/GetJealous:self_url}"><img src="http://us.i1.yimg.com/us.yimg.com/i/us/my/addtomyyahoo4.gif" width="91" height="17" border="0" align="middle" alt="Add to My Yahoo!"/></a>&#160;&#160;<a href="http://add.my.yahoo.com/rss?url={//rss/channel/GetJealous:self_url}">My Yahoo</a>&#160; &#160; &#160; </li>
          <li><a href="http://fusion.google.com/add?feedurl={//rss/channel/GetJealous:self_url}"><img src="/images/googlereader.gif" width="91" height="17" border="0" align="middle" alt="Add to Google Reader!"/></a>&#160;&#160;<a href="http://fusion.google.com/add?feedurl={//rss/channel/GetJealous:self_url}">Google Reader</a>&#160; &#160; &#160; </li>
        </ul>

        <h2>Windows</h2>        
        <ul>
          <li><a href="http://www.sharpreader.net/">SharpReader (requires the Microsoft .NET framework runtime)</a></li>
          <li><a href="http://www.feedreader.com/">FeedReader</a></li>

        </ul>
        
        <h2>Linux</h2>      
        <ul>
          <li><a href="http://www.nongnu.org/straw/">Straw</a></li>
        </ul>
        <hr/>
        <p>The currently available stories in this feed are:</p>
        <xsl:for-each select="//item">
          <h2><a><xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute><xsl:value-of select="title" /></a></h2>
          <span class="storytime"><xsl:value-of select="pubDate" /></span>
          <div class="story"><xsl:value-of select="description" disable-output-escaping="yes"/></div>
        </xsl:for-each>
        <div class="bottom">
        <span class="left">Contents of this feed are <xsl:value-of select="//rss/channel/copyright" />.</span><span class="right">This page was generated automatically by <acronym title="XML Style Language">XSL</acronym></span>
        </div>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
