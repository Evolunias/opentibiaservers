import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot');
}

export default function WithScreenshotsNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot" />;
}
