import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-official');
}

export default function WithScreenshotsEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-official" />;
}
