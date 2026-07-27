import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-website');
}

export default function WithScreenshotsEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-website" />;
}
