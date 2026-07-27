import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia');
}

export default function WithScreenshotsEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia" />;
}
