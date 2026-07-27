import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-tibia');
}

export default function YurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="yurots-tibia" />;
}
