import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-website');
}

export default function YurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="yurots-website" />;
}
