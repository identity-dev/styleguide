
  <div class="pattern">
  <h2>Colors</h2>
  <p class="subtitle pattern-description">
    A collection of our branded colors
  </p>
  <section class="example">
    <div class="example-demo">
      <h3>Primary</h3>
      <div class="color-cube teal"></div>
      <div class="color-cube teal-dark"></div>
      <h3>Secondary</h3>
      <div class="color-cube green"></div>
      <div class="color-cube yellow"></div>
      <div class="color-cube red"></div>
      <h3>Variations</h3>
      <div class="color-cube teal-light"></div>
      <div class="color-cube teal-medium"></div>
      <div class="color-cube red-light"></div>
      <div class="color-cube yellow-dark"></div>
      <div class="color-cube yellow-light"></div>
      <div class="color-cube teal-hover"></div>
      <div class="color-cube red-hover"></div>
      <h3>Grays</h3>
      <div class="color-cube gray0"></div>
      <div class="color-cube gray1"></div>
      <div class="color-cube gray2"></div>
      <div class="color-cube gray3"></div>
      <div class="color-cube gray4"></div>
      <div class="color-cube gray5"></div>
      <div class="color-cube gray6"></div>
      <div class="color-cube gray7"></div>
      <div class="color-cube gray8"></div>
      <div class="color-cube gray9"></div>
    </div>
  </section>
</div>



<div class="pattern">
  <h2>Icons</h2>
  <p class="subtitle pattern-description">
    FontAwesome icons are imported through bower and the fontcustom icons are compiled in the assets/fontcustom folder. <a href="http://fortawesome.github.io/Font-Awesome/icons/">View FontAwesome icons</a> or <a href="https://identity-dev.github.io/streamline/dist/streamline-preview.html">View fontcustom icons</a>
  </p>
  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<i class="fa fa-bed"></i>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

  <div class="pattern">
  <h2>Grid</h2>
  <p class="subtitle pattern-description">
    An updated version of the media box.
  </p>
  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="grid">
  <div class="column-4">
    First
  </div>
  <div class="column-4">
    Middle
  </div>
  <div class="column-4">
    Last
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

<div class="pattern">
  <h2>Mobile columns</h2>
  <p class="subtitle pattern-description">
    Columns to be used only on mobile, what?!
  </p>
  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="grid grid--right">
  <div class="column-6--mobile">
    <button class="btn--small btn--outline">Cancel</button>
  </div>
  <div class="column-6--mobile">
    <button class="btn--small">Submit</button>
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

<div class="pattern">
  <h2>Grid Modifiers</h2>
  <p class="subtitle pattern-description">
    Reversed, no gutter and stacked on mobile. Small gutters.
  </p>
  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="grid grid--reverse grid--no_gutter grid--collapse">
  <div class="column-4">
    First
  </div>
  <div class="column-4">
    Middle
  </div>
  <div class="column-4">
    Last
  </div>
</div>

<div class="grid grid--gutter_small">
  <div class="column-4">
    First
  </div>
  <div class="column-4">
    Middle
  </div>
  <div class="column-4">
    Last
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>


<div class="pattern">
  <h2>Column Modifiers</h2>
  <p class="subtitle pattern-description">
    Alignment, offsets and fixed widths
  </p>
  <section class="example">
    <div class="example-demo example-alignment"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="grid">
  <div class="column-4 column--left column--bottom">
    Left Bottom
  </div>
  <div class="column-4 column--right column--middle">
    Right Middle
  </div>
  <div class="column-4 column--top column--center">
    Top Center
  </div>
</div>

<div class="grid grid--gutter_small">
  <div class="column-4 column--push-8">
    Pushed
  </div>
  <div class="column-8 column--pull-4">
    Pulled
  </div>
</div>

<div class="grid grid--collapse grid--reverse">
  <div class="column--fixed-100">
    Fixed Left
  </div>
  <div class="column-12 column--left-100 column--right-100">
    Sharing Fixed elements
  </div>
  <div class="column--fixed-100">
    Fixed Right
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

  <div class="pattern">
  <h2>Forms and Validation</h2>
  <p class="subtitle pattern-description">
    Demonstrating form elements and majestic validation
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<form class="form_pretty">
  <div class="grid grid--gutter_small grid--collapse">
    <div class="column-4">
      <label class="textfield textfield--label_bordered">
        <input type="text" name="fullname" value="Paul Rudd" validation="full_name" />
        <span class="textfield-label">Full Name</span>
      </label>
    </div>
    <div class="column-4">
      <label class="textfield">
        <input type="text" name="email" id="email" validation="required" />
        <span class="textfield-label">Email</span>
      </label>
    </div>
    <div class="column-4">
      <label class="dropdown">
        <select name="number" id="number" validation="required">
          <option disabled="disabled" selected="selected">Number</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
        </select>
      </label>
    </div>
  </div>
  <div class="grid grid--gutter_small grid--collapse">
    <div class="column-4 column--bottom">
      <label class="dropdown validation_right" data-validation-placement="birthday-label">
        <span class="dropdown-label" id="birthday-label">Birthday</span>
        <select name="day" id="day" validation="required">
          <option disabled="disabled" selected="selected">Day</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </label>
    </div>
    <div class="column-4 column--bottom">
      <label class="dropdown" data-validation-placement="birthday-label">
        <select name="month" id="month" validation="required">
          <option disabled="disabled" selected="selected">Month</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </label>
    </div>
    <div class="column-4 column--bottom">
      <label class="dropdown" data-validation-placement="birthday-label">
        <select name="year" id="year" validation="required">
          <option disabled="disabled" selected="selected">Year</option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </label>
    </div>
  </div>
  <label class="textfield">
    <textarea name="comments" disabled></textarea>
    <span class="textfield-label">Comments</span>
  </label>
  <label class="checkbox">
    <input type="checkbox" name="terms" value="yes" validation="checkbox" />
    <span class="checkbox-label">Checkbox</span>
  </label>
  <input type="submit" class="btn" />
</form>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

  <div class="pattern">
  <h2>Notifications</h2>
  <p class="subtitle pattern-description">
   Modal that
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="notification notification--feedback">
  <div class="notification-content">We've sent you an email   <a href="#" class="link--text">Link</a>
  </div>
</div>

<div class="notification notification--warning">
  <div class="notification-content">
    <div class="grid">
      <div class="column-8 column--middle">
      Are you sure you want to close?
      </div>
      <div class="column-4 column--middle column--right">
        <button class="btn--small btn--outline btn--warn">Don't Close</button>
      </div>
    </div>
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>
  <div class="pattern">
  <h2>Typography</h2>
  <p class="subtitle pattern-description">
    Connected Elements
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="type type--hero">
  <h1>Landing page hero</h1>
  <p class="subtitle">Landing page hero subtitle</p>
</div>

<hr />

<div class="type type--hero">
  <h2>Subpage hero</h2>
  <p class="subtitle">Subpage hero subtitle</p>
</div>

<hr />

<div class="type type--description">
  <h2>Landing page description</h2>
  <p class="subtitle">Landing page description subtitle</p>
</div>

<hr />

<div class="type type--description">
  <h3>Subpage description</h3>
  <p class="subtitle">Subpage description subtitle</p>
</div>

<hr />

<div class="type type--quote container--large container--tight_y">
  <p class="type--quote-body">
    Check your credit report for new accounts that you did not open.Are there charges to your credit card that you did not authorize? Have collection agencies contacted you about unpaid bills thatdon’t belong to you? You may be the victim of identity theft.
  </p>
  <p class="type--quote-attribution">
    -Lisa Verano, San Francisco
  </p>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

  <div class="pattern">
  <h2>Modules</h2>
  <p class="subtitle pattern-description">
    Styleguide elements can be tied together very naturally. Below are a couple of beautiful examples.
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<div class="container bg-teal">
  <div class="wrapper wrapper--padded">
    <div class="type type--white type--hero u-ta-center">
      <h1>Welcome to the Jungle</h1>
      <p class="subtitle">I guess you could say it's getting pretty serious.</p>
    </div>
  </div>
</div>


<div class="container">
  <div class="wrapper">
    <div class="container container--tight bg--white container--bordered">
      <div class="icon_header icon_header--large fa-envelope">
        Email
      </div>
      <div class="container">
        <div class="grid">
          <div class="column-6 column--middle">
            <p>Share your email?</p>
          </div>
          <div class="column-6 column--middle column--right">
            <button>Yes</button>
            <button class="btn--secondary">Nah</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

  <div class="pattern">
  <h2>Blocks of Code</h2>
  <p class="subtitle pattern-description">
   Displaying code in all the right wrong ways. Note <code>&lt;code&gt;</code> and <code>&lt;samp&gt;</code> yield the same styles.
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<pre><samp>{
  id: 617,
  name: 'Paul Rudd',
  roles: [
    {
      title: 'Anchorman',
      year: 2004
    },
    {
      title: 'Ant Man',
      year: 2015
    },
  ]
}</samp></pre>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>

<div class="pattern">
  <h2>Code Block Class</h2>
  <p class="subtitle pattern-description">
   <code>.code-block</code> to make <code>samp</code>, <code>code</code>, <code>kbd</code> display as block elements
  </p>

  <section class="example">
    <div class="example-demo"></div>
    <div class="example-code">
      <xmp class="prettyprint">
<code class="code-block">https://identity.com/oauth/authorize</code>
      </xmp>
    </div>
    <div class="example-toggle"></div>
  </section>
</div>
