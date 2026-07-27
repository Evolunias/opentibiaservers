import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-tibia');
}

export default function XanteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="xantera-tibia" />;
}
