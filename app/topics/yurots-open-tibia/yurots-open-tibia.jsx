import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-open-tibia');
}

export default function YurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="yurots-open-tibia" />;
}
