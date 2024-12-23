class WelcomeController < ApplicationController
  def index
    @very_important_content = <<-CONTENT
      The sun gently peeked through the dense foliage, casting dappled shadows on the forest floor.
      With a steady hand, the artist meticulously applied strokes of vibrant color to the canvas, bringing the landscape to life.
      As the waves crashed against the rugged coastline, a sense of tranquility washed over the solitary figure standing on the cliff's edge.
      Amidst the bustling city streets, the aroma of freshly brewed coffee wafted from the quaint cafe, inviting passersby to linger a little longer.
    CONTENT
  end
end
