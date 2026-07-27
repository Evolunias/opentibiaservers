import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-servers-south-america');
}

export default function WithScreenshotsServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-servers-south-america" />;
}
