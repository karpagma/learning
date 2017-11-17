using System.Linq;
using CheckLinksConsole;
using Xunit;

namespace CheckLinksTests
{
    public class UnitTest1
    {
        [Fact]
        public void WithoutHttpAtStartOfLink_NoLinks()
        {
            var links = LinkChecker.GetLinks("<a href=\"google.com\" />");
            Assert.Equal(links.Count(), 0);
        }
        
        [Fact]
        public void WitHttpAtStartOfLink_HasLinks()
        {
            var links = LinkChecker.GetLinks("<a href=\"http://google.com\" />");
            Assert.Equal(links.Count(), 1);
            Assert.Equal(links.First(), "http://google.com");
        }
    }
}
