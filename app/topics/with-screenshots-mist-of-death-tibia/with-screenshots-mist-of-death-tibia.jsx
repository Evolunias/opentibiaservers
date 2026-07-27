import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-tibia');
}

export default function WithScreenshotsMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-tibia" />;
}
