package clickstream

import java.io.FileWriter

import config.Settings

import scala.util.Random

object LogProducer extends App {
  val wlc = Settings.WebLogGen

  val Products = scala.io.Source.fromInputStream(getClass.getResourceAsStream("/products.csv")).getLines().toArray
  val Referrers = scala.io.Source.fromInputStream(getClass.getResourceAsStream("/referrers.csv")).getLines().toArray
  val Visitors = (0 to wlc.visitors).map("Visitor-" + _)
  val Pages = (0 to wlc.pages).map("Page-" + _)

  val random = new Random()
  val filePath = wlc.filePath

  val fileWriter = new FileWriter(filePath, true)
  val incrementTimeEvery = random.nextInt(wlc.records - 1) + 1
  var timeStamp = System.currentTimeMillis()
  var adjustedTimestamp = timeStamp

  for (iteration <- 1 to wlc.records) {
    adjustedTimestamp = adjustedTimestamp + ((System.currentTimeMillis() - timeStamp) * wlc.timeMultiplier)
    timeStamp = System.currentTimeMillis()
    val action = iteration % (random.nextInt(200) + 1) match {
      case 0 => "purchase"
      case 1 => "add_to_cart"
      case _ => "page_view"
    }
    val referrer = Referrers(random.nextInt(Referrers.length - 1))
    val prevPage = referrer match {
      case "Internal" => Pages(random.nextInt(Pages.length - 1))
      case _ => ""
    }
    val visitor = Visitors(random.nextInt(Visitors.length - 1))
    val page = Pages(random.nextInt(Pages.length - 1))
    val product = Products(random.nextInt(Products.length - 1))

    val line = s"$adjustedTimestamp\t$referrer\t$action\t$prevPage\t$visitor\t$page\t$product\n"
    fileWriter.write(line)

    if (iteration % incrementTimeEvery == 0) {
      println(s"Sent $iteration messages!")
      val sleeping = random.nextInt(1500)
      println(s"Sleeping for $sleeping ms")
      Thread sleep sleeping
    }
  }
  fileWriter.close()
}
