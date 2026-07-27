import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-france');
}

export default function WithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-france" />;
}
