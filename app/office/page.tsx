export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3 w-full md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl md:leading-[3rem] font-extrabold">
          Office Setup
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          If you are curious about what is in my office (in a totally non-creepy
          way), here you go.
        </p>
      </section>
      <div className="flex flex-col gap-5 w-full md:max-w-2xl">
        <section>
          <h1 className="text-3xl font-semibold">Hardware</h1>
          <p className="text-gray-600 dark:text-gray-400">
            I&apos;m doing my best to share everything I have in my office, in
            terms of hardware on my desk. With reasons I like it or dislike the
            item.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">M1 MacBook Air 2022</h2>
          <p className="text-gray-600 dark:text-gray-400">
            My workhorse. Although it is not as speced out as the MacBook Pro,
            it gets the job done for me. It&apos;s also super easy to carry
            around so I can work on the go!
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Apple Magic TrackPad</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Honestly, going from a mouse to the Magic TrackPad has been a really
            nice transition. I can use gestures to superpower my efficiency.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Apple Magic Keyboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you currently have a keyboard that you like, I wouldn&apos;t
            bother changing it for this. I like that it is small, easy to move
            around and great battery.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">
            IKEA Karlby Countertop (Walnut)
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            This desk is super long so I have plenty of space to do things, like
            write notes on the side and have space for pictures to keep me
            company as I work.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Alex Drawers (x2) (Black)</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Alex Drawers provide me plenty of space to dock my laptop and have
            room for documents, controllers, replacement parts, and anything
            else. I use these to prop my desk.
          </p>
        </section>
        <section>
          <h1 className="text-3xl font-semibold">Software</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here are some of the software that I use on a daily basis &mdash;
            maybe you will find something useful that might work for you.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Visual Studio Code</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Visual Studio Code is a relatively slow text editor relatively
            speaking; but, for what I usually need to do, it works for me. I
            like the marketplace and free plugins which make it super easy for
            my to work.
          </p>
        </section>
      </div>
    </div>
  );
}
