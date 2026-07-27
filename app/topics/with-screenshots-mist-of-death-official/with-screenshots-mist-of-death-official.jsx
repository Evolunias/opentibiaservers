import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-official');
}

export default function WithScreenshotsMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-official" />;
}
