import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-south-america');
}

export default function WithScreenshotsGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-south-america" />;
}
