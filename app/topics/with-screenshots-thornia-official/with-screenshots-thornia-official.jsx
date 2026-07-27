import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-official');
}

export default function WithScreenshotsThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-official" />;
}
