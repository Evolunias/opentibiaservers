import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-website');
}

export default function WithScreenshotsNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-website" />;
}
