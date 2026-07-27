import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-france');
}

export default function WithScreenshotsServersFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-france" />;
}
